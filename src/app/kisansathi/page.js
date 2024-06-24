"use client"

import CenteredLayout from "./cardContent"
import Card from "./threeCard"
import EnrollmentProcess from "./enrollment"
import CenteredVideo from "./cardVideo"
const Kisansathi = () => {
    return (
        <div>
            <CenteredVideo />
            <CenteredLayout />

            <Card />
            <Card />
            <EnrollmentProcess />

        </div>
    )
}

export default Kisansathi