"use client";
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

    const handleSubmit = async (e) => {
        console.log(formData),
            e.preventDefault();
        try {
            const response = await fetch('api/sendMail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                console.log('Email sent successfully', result);
            } else {
                console.error('Error sending email', result);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="lg:flex items-left justify-center small:w-[750px] lg:w-full">
            <form
                onSubmit={handleSubmit}
                className="wpcf7-form init p-8 rounded-lg w-2/3"
                aria-label="Contact form"
                noValidate
                data-status="init"
            >
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
                                    id="name_1"
                                    onChange={handleChange}
                                />
                            </span>
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                            <p>
                                <span className="wpcf7-form-control-wrap" data-name="tel_1">
                                    <input
                                        size="80"
                                        className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel form-input w-full px-4 py-2 border border-gray-300 rounded-full"
                                        aria-required="true"
                                        aria-invalid="false"
                                        placeholder="Contact Number"
                                        value={formData.tel_1}
                                        type="tel"
                                        name="tel_1"
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
                    <div>
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
