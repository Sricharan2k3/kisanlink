"use client"
import React, { useState } from 'react';

const CareersForm = () => {
    const [formData, setFormData] = useState({
        name_1: '',
        tel_1: '',
        state_1: '',
        district_1: '',
        Description_1: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="flex items-left justify-center  ">
            <form
                action="/careers/#wpcf7-f3180-p2-o1"
                method="post"
                className="wpcf7-form init  p-8 rounded-lg  w-2/3"
                aria-label="Contact form"
                noValidate
                data-status="init"
                onSubmit={handleSubmit}
            >
                <div className="hidden">
                    <input type="hidden" name="_wpcf7" value="3180" />
                    <input type="hidden" name="_wpcf7_version" value="5.7.7" />
                    <input type="hidden" name="_wpcf7_locale" value="en_US" />
                    <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f3180-p2-o1" />
                    <input type="hidden" name="_wpcf7_container_post" value="2" />
                    <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                </div>

                <div className="faq-form faq-forms">
                    <div className="mb-4">
                        <p>
                            <span className="wpcf7-form-control-wrap" data-name="name_1">
                                <input
                                    size="80"
                                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-input w-full px-4 py-2 border border-gray-300 rounded-full"
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="Name"
                                    value={formData.name_1}
                                    type="text"
                                    name="name_1"
                                    onChange={handleChange}
                                />
                            </span>
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                            <p>
                                <span className="wpcf7-form-control-wrap" data-name="tel-1">
                                    <input
                                        size="80"
                                        className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel form-input w-full px-4 py-2 border border-gray-300 rounded-full"
                                        aria-required="true"
                                        aria-invalid="false"
                                        placeholder="Contact Number"
                                        value={formData.tel_1}
                                        type="tel"
                                        name="tel-1"
                                        onChange={handleChange}
                                    />
                                </span>
                            </p>
                        </div>
                        <div>
                            <p>
                                <span className="wpcf7-form-control-wrap" data-name="state_1">
                                    <input
                                        size="80"
                                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-input w-full px-4 py-2 border border-gray-300 rounded-full"
                                        aria-required="true"
                                        aria-invalid="false"
                                        placeholder="State"
                                        value={formData.state_1}
                                        type="text"
                                        name="state_1"
                                        onChange={handleChange}
                                    />
                                </span>
                            </p>
                        </div>
                        <div>
                            <p>
                                <span className="wpcf7-form-control-wrap" data-name="district_1">
                                    <input
                                        size="80"
                                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-input w-full px-4 py-2 border border-gray-300 rounded-full"
                                        aria-required="true"
                                        aria-invalid="false"
                                        placeholder="District"
                                        value={formData.district_1}
                                        type="text"
                                        name="district_1"
                                        onChange={handleChange}
                                    />
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <p>
                            <span className="wpcf7-form-control-wrap" data-name="Description_1">
                                <textarea
                                    cols="40"
                                    rows="10"
                                    className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required form-textarea w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="Description"
                                    name="Description_1"
                                    value={formData.Description_1}
                                    onChange={handleChange}
                                ></textarea>
                            </span>
                        </p>
                    </div>
                    <div >
                        <p>
                            <input
                                className="wpcf7-form-control has-spinner wpcf7-submit px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600"
                                type="submit"
                                value="Submit"
                            />
                            <span className="wpcf7-spinner"></span>
                        </p>
                    </div>
                </div>
                <div className="wpcf7-response-output" aria-hidden="true"></div>
            </form>
        </div>
    );
};

export default CareersForm;
