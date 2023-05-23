<template class="w-full min-h-screen">
    <div v-if="handleConfirm" class="w-full absolute h-max bg-gray-500/30">
        <div class="flex flex-col">
            <div class="w-full h-24 "></div>
            <div class="w-full min-h-screen relative flex justify-center items-center">
                <div class="w-3/12 p-5 bg-white rounded flex flex-col gap-4 justify-center items-center py-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor"
                        class="bi bi-check-circle" viewBox="0 0 16 16" id="IconChangeColor">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                            id="mainIconPathAttribute" fill="#24e54b"></path>
                        <path
                            d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"
                            id="mainIconPathAttribute" fill="#24e54b"></path>
                    </svg>
                    <p class="text-2xl">Successful</p>
                    <div class="flex flex-col gap-2">
                        <p>Thank you for purchasing.</p>
                        <p>Your payment was successful.</p>
                    </div>
                        <button @click="() => this.$router.push('/myticket')" class="w-full mt-4 rounded text-white bg-green-400 p-3">See Ticket</button>
                </div>
            </div>
            <div class="w-full h-52 "></div>
        </div>
    </div>
    <div class="w-full min-h-screen bg-gradient-to-b from-[#2c2c38] via-[#284265] to-[#2c2c38]">
        <div class="container mx-auto py-10 flex flex-col justify-center items-center ">
            <h1 class="font-bold text-3xl mt-2 text-white pb-10 tracking-wide">Payment</h1>
            <div class="w-10/12 flex flex-row gap-10 px-20 mt-2">
                <div class="w-7/12 mt-4 px-8 border-2 rounded py-4 text-white text-xl tracking-wide">
                    <div class="flex flex-col gap-4 text-left">
                        <div class="w-full flex flex-row items-center">
                            <p class="w-11/12 font-semibold underline underline-offset-4">Ticket Details</p>
                            <p class="w-1/12 text-end mt-1">X {{ all.count }}</p>
                        </div>
                        <p class="text-2xl tracking-wide font-semibold">{{all.concert.name}}</p>
                        <p class="text-xl tracking-wide">Name : {{all.user.fullName}}</p>
                        <div class="w-full flex flex-row gap-4 items-center">
                            <p>Date : {{ new Date(all.round.date).toDateString()}}</p>
                        </div>
                        <p>Time : {{ new Date(all.round.startTime).toTimeString().slice(0, 5)}} - {{ new Date(all.round.endTime).toTimeString().slice(0, 5)}}</p>
                        <p>{{ }}</p>
                        <div class="border-t py-3 text-right">
                            <p class="text-2xl">Total <span class="text-yellow-400">{{all.price}} THB</span></p>
                        </div>
                    </div>
                </div>
                <div class="w-5/12 mt-4 flex flex-col gap-5 items-center">
                    <p class="text-white text-start text-xl font-semibold tracking-wide">Payment Method</p>
                    <div class="w-full flex flex-col text-start gap-5">
                        <div class="bg-white py-3 px-4 rounded flex flex-row items-center gap-5">
                            <img class="w-2/12 h-auto rounded" src="../assets/kasikorn.png" alt="Image" />
                            <p>ธนาคารกสิกรไทย 029-1-24330-1</p>
                        </div>
                        <div class="bg-white py-3 px-4 rounded flex flex-row items-center gap-5">
                            <img class="w-2/12 h-auto rounded" src="../assets/scb.png" alt="Image" />
                            <p>ธนาคารไทยพาณิชย์ 440-133027-1</p>
                        </div>
                        <div class="bg-white py-3 px-4 rounded flex flex-row items-center gap-5">
                            <img class="w-2/12 h-auto rounded" src="../assets/bangkok.png" alt="Image" />
                            <p>ธนาคารกรุงเทพ 216-3-08932-1</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-5/12 border-b-2 py-5 my-5 border-dashed"></div>
            <div class="w-6/12 flex flex-col gap-5 px-20 py-2 mt-4 text-white justify-center">
                <p class="text-xl tracking-wide">Payment Confirmation</p>
                <div class="mb-1 w-full">
                    <label class="block text-start mb-1 tracking-wide">Full Name :</label>
                    <input type="text" class="w-full text-black p-2 rounded" value="123" />
                </div>
                <div class="w-full flex flex-row gap-4">
                    <div class="mb-1 w-full">
                        <label class="block text-start mb-1 tracking-wide">Date :</label>
                        <input type="date" class="w-full text-black p-2 rounded" value="123" />
                    </div>
                    <div class="mb-1 w-full">
                        <label class="block text-start mb-1 tracking-wide">Time :</label>
                        <input type="time" class="w-full text-black p-2 rounded" value="123" />
                    </div>
                </div>
                <div class="w-full">
                    <label class="text-lg text-left block mb-1 tracking-wide">Image :</label>
                    <input id="file-input" class="hide-file-input hidden" type="file" accept="image/*"
                        @change="() => onFileChange($event)" />
                    <div class="w-full flex items-center">
                        <label
                            class="bg-white p-3 mr-4 gap-3 flex items-center border border-gray-300 focus:border-yellow-300 focus:outline-none focus:ring focus:ring-primary-dark/10 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100"
                            for="file-input">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="30"
                                width="30">
                                <rect width="256" height="256" fill="none"></rect>
                                <polyline points="86 82 128 40 170 82" fill="none" stroke="#000" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="24"></polyline>
                                <line x1="128" y1="152" x2="128" y2="40" fill="none" stroke="#000" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="24"></line>
                                <path d="M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152" fill="none" stroke="#000"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="24"
                                    id="mainIconPathAttribute">
                                </path>
                            </svg>
                            <p class="text-black">Upload a file</p>
                        </label>
                        <p class="text-white">{{ fileName ? fileName : "No file chosen." }}</p>
                    </div>
                </div>
                <div class="w-full flex flex-row gap-4">
                    <button @click="() => this.$router.push('/myticket')"
                        class="w-1/2 mt-5 text-center px-10 py-4 bg-gray-500 tracking-wide text-white font-bold rounded hover:bg-gray-600">
                        Cancel </button>
                    <button @click="() => confirm()"
                        class="w-1/2 mt-5 text-center px-10 py-4 bg-red-500 tracking-wide text-white font-bold rounded hover:bg-red-600">
                        Confirm
                    </button>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    // components: { FileComponent },
    data() {
        return {
            filePreview: '',
            ticket: {},
            all: {},
            fileName: '',
            handleConfirm: false
        };
    },
    beforeCreate() {
        axios.get('http://localhost:3000/getPaymentById/' + this.$route.params.paymentId)
            .then((res) => {
                this.all = res.data.Ticket[0];
            });

    },
    methods: {
        onFileChange($event) {
            const file = $event.target.files[0]
            const reader = new FileReader()
            if (file) {
                reader.readAsDataURL(file)
                reader.onload = () => {
                    // Set a new property on the captured `file` and set it to the converted base64 image
                    file.previewBase64 = reader.result
                    // Emit the file with the new previewBase64 property on it
                    this.filePreview = file.previewBase64
                    this.fileName = file.name;
                    this.$emit('file-updated', file)
                }
                reader.onerror = (error) => {
                    console.log('Error ', error)
                }
                console.log("file :" + file)
            }
        },
        confirm(){
            this.handleConfirm = true
            axios.patch('http://localhost:3000/updatePayment/' + this.$route.params.paymentId, {
                status: "COMPLETE",
            })
        }
    },
};
</script>
<style>
.imgqrpayment {
    width: 60%;
    height: 100%;
}
</style>