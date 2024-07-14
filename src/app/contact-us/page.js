/**
 * v0 by Vercel.
 * ../..see https://v0.dev/t/ELNJd2gD13K
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Button } from "../../components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../components/ui/select"
import { Card } from "../../components/ui/card"
import Background from "../../utils/background"
import { AiOutlineMail } from 'react-icons/ai';
export default function Component() {
    const [selectedForm, setSelectedForm] = useState("Kisansathi")
    const emailAddress = 'info@kisanlink.in';
    const renderForm = () => {
        switch (selectedForm) {


            case "Kisansathi":
                return (
                    <div>

                        <h2 className="text-2xl font-bold text-primary mb-2">Kisansathi</h2>
                        <div className="space-y-4">
                            <Input placeholder="Name" />
                            <div className="grid grid-cols-3 gap-4">
                                <Input placeholder="Contact Number" />
                                <Input placeholder="State" />
                                <Input placeholder="District" />
                            </div>
                            <Textarea placeholder="Description" className="min-h-[100px]" />
                            <Button className="bg-green-500 text-white">Submit</Button>
                        </div>
                    </div>
                )
            case "Collaborator":
                return (
                    <div>

                        <h2 className="text-2xl font-bold text-primary mb-2">Collaborator</h2>
                        <div className="space-y-4">
                            <Input placeholder="Name of the company" />
                            <Textarea placeholder="Description" className="min-h-[100px]" />
                            <div className="grid grid-cols-3 gap-4">
                                <Input placeholder="Contact Number" />
                                <Input placeholder="State" />
                                <Input placeholder="District" />
                            </div>
                            <Input placeholder="Emai" />
                            <Textarea placeholder="Address" className="min-h-[100px]" />
                            <Button className="bg-green-500 text-white">Submit</Button>
                        </div>
                    </div>
                )
            case "Farmer":
                return (
                    <div>

                        <h2 className="text-2xl font-bold text-primary mb-2">Farmer</h2>
                        <div className="space-y-4">
                            <Input placeholder="Name" />
                            <div className="grid grid-cols-3 gap-4">
                                <Input placeholder="Contact Number" />
                                <Input placeholder="State" />
                                <Input placeholder="District" />
                            </div>
                            <Textarea placeholder="Description" className="min-h-[100px]" />
                            <Button className="bg-green-500 text-white">Submit</Button>
                        </div>
                    </div>

                )
            case "Others":
                return (
                    <div>

                        <h2 className="text-2xl font-bold text-primary mb-2">Others</h2>
                        <div className="space-y-4">
                            <Input placeholder="Name" />
                            <Input placeholder="Email" />
                            <Input placeholder="Subject" />
                            <Textarea placeholder="Your Comment" className="min-h-[100px]" />
                            <Button className="bg-green-500 text-white">Submit</Button>
                        </div>
                    </div>
                )
            default:
                return null
        }
    }
    return (
        <div>
            <Background title={"Contact Us"} />


            <div className="p-6 space-y-6 mt-12">
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                        <Select onValueChange={setSelectedForm} className="bg-white">
                            <SelectTrigger>
                                <SelectValue placeholder="Select a form" />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="Kisansathi">Kisansathi</SelectItem>
                                <SelectItem value="Collaborator">Collaborator</SelectItem>
                                <SelectItem value="Farmer">Farmer</SelectItem>
                                <SelectItem value="Others">Others</SelectItem>
                            </SelectContent>
                        </Select>
                        <Card className="p-6">{renderForm()}</Card>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-bold text-primary">Head Office</h3>
                            <p>Plot no 27, Nandi Hills, Road no 51, Jubilee Hills, Hyderabad, 500033</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-primary">Regional Office - Nirmal</h3>
                            <p>1-2-27/A, Ground Floor, Meher Nilayam, Natrajnagar, Opp to Bus Depot, Nirmal, 504106</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-primary">Regional Office - Odisha</h3>
                            <p>
                                C/O- Structiall Engineering Consultancy, Plot No-439, Gada Mahaveer Lane Old Town, Lewis Road, Bhubaneswar
                                751002
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-primary">Say Hello</h3>
                            <p class="mb-4 flex lg:items-center lg:justify-start"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mr-3 h-5 w-5"><path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd"></path></svg>+91 73867 27007</p>
                            <div className="flex items-center space-x-2 mt-4">
                                <AiOutlineMail className="text-gray-600" size={24} /> {/* Email icon */}
                                <a href={`mailto:${emailAddress}`} className="text-gray-600 hover:text-gray-900">{emailAddress}</a> {/* Email address */}
                            </div>

                            <ul className="flex items-center space-x-3 mt-9">
                                <li>
                                    <a href="https://twitter.com/KisanlinkIndia" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-green-600 focus:bg-green-600">
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100092530399513" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-green-600 focus:bg-green-600">
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.instagram.com/kisanlink.farms/" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-green-600 focus:bg-green-600">
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                            <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                            <path
                                                d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>


                                <li>
                                    <a href="https://www.youtube.com/@kisanlink" title="YouTube" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-green-600 focus:bg-green-600">
                                        <svg fill="#ffffff" width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>        </a>
                                </li>

                                <li>
                                    <a href="https://www.linkedin.com/company/kisanlink/" title="LinkedIn" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-green-600 focus:bg-green-600">
                                        <svg width="14px" height="14px" fill="#ffffff" viewBox="0 -0.5 25 25" xmlns="http://www.w3.org/2000/svg"><path d="m5.706 7.798v16.202h-5.395v-16.202zm.343-5.002c.001.029.002.063.002.098 0 .749-.318 1.423-.826 1.895l-.002.001c-.545.498-1.274.803-2.075.803-.049 0-.099-.001-.148-.003h.007-.033c-.041.002-.089.003-.137.003-.784 0-1.496-.306-2.025-.804l.001.001c-.504-.488-.816-1.17-.816-1.925 0-.024 0-.048.001-.073v.004c-.001-.021-.001-.045-.001-.069 0-.762.324-1.448.841-1.929l.002-.001c.544-.495 1.271-.799 2.068-.799.046 0 .091.001.137.003h-.006c.043-.002.092-.003.143-.003.785 0 1.5.303 2.034.798l-.002-.002c.515.497.835 1.193.835 1.964v.042-.002zm19.062 11.92v9.284h-5.378v-8.665c.005-.079.007-.171.007-.263 0-.896-.249-1.733-.682-2.447l.012.021c-.427-.596-1.117-.979-1.896-.979-.06 0-.12.002-.18.007h.008c-.027-.001-.058-.002-.089-.002-.62 0-1.19.213-1.641.57l.006-.004c-.453.367-.808.836-1.032 1.375l-.008.023c-.116.355-.182.763-.182 1.187 0 .048.001.096.003.144v-.007 9.042h-5.378q.033-6.523.033-10.578t-.016-4.839l-.016-.785h5.378v2.354h-.033c.214-.345.435-.644.678-.924l-.008.009c.281-.309.583-.588.908-.838l.016-.012c.404-.311.878-.555 1.392-.704l.03-.007c.538-.161 1.157-.254 1.797-.254h.079-.004c.071-.003.154-.005.237-.005 1.681 0 3.195.714 4.256 1.856l.003.004q1.702 1.856 1.702 5.436z" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}