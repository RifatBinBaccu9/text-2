"use client";
import { Button } from "@/app/component/common/button"
import ImageTrim from "@/app/component/from/image"
import FormInput from "@/app/component/from/input"
import { Form } from "antd"
import { BiEdit } from "react-icons/bi"

const User = () => {
    return(
        <div className="!w-full">
         <Form className="flex flex-col gap-4 !w-full">
            <div className="flex flex-row justify-between items-center gap-4">
                <div>
                    <ImageTrim />
                </div>
                <Button icons={<BiEdit />} text={"Edit Profile"} />
            </div>
            <div className="flex flex-row items-center gap-4 !h-[80px] !w-full">
                <FormInput label={"First Name"} type={"text"} placeholder={"Enter Your First Name"} className={"!py-3 !w-full !border-bgNormal focus-within:!border-bgHover"} />
                <FormInput label={"List Name"} type={"text"} placeholder={"Enter Your List Name"} className={"!py-3 !w-full !border-bgNormal focus-within:!border-bgHover"} />
            </div>
            <div className="flex flex-row items-center gap-4 !h-[80px] !w-full">
                <FormInput label={"Phone Number"} type={"number"} placeholder={"Enter Your Phone Number"} className={"!py-3 !w-full !border-bgNormal focus-within:!border-bgHover"} />
                <FormInput label={"Email Address"} type={"email"} placeholder={"Enter Your Email Address"} className={"!py-3 !w-full !border-bgNormal focus-within:!border-bgHover"} />
            </div>
            <div className="flex flex-row items-center gap-4 !h-[80px] !w-full">
                <FormInput label={"Address"} type={"text"} placeholder={"Enter Your Address"} className={"!py-3 !w-full !border-bgNormal focus-within:!border-bgHover"} />
            </div>
         </Form>
        </div>
    )
}

export default User