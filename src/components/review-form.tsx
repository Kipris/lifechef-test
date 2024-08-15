'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { userDataSchema, UserData } from "@/src/schemas/user-data-schema";
import { useDialogStore } from "../providers/dialog-store-provider";
import { $FloatingLabel, $CheckboxContainer, $Checkbox, $CheckboxInput, $CheckboxLabel, $ErrorMessage } from "./review-form.styled";

export const ReviewForm = () => {
    const showDialog = useDialogStore((state) => state.showDialog);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserData>({
        resolver: zodResolver(userDataSchema),
        defaultValues: {
            nickname: '',
            isConfirmed: false
        }
    });

    const onSubmit = (data: UserData) => {
        showDialog(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mb-8">
                <$FloatingLabel htmlFor="nickname">Your Nickname (other users will see this)</$FloatingLabel>
                <input
                    id="nickname"
                    type="text"
                    className={`w-full p-4 text-base font-normal leading-5 h-14 mt-1 relative pr-14 ${errors.nickname ? "border-red-500" : ""}`}
                    {...register("nickname")}
                />
                {errors.nickname && (
                    <$ErrorMessage>{errors.nickname.message}</$ErrorMessage>
                )}
            </div>

            <div className="relative my-8">
                <label className="flex align-center">
                    <$CheckboxContainer>
                        <$CheckboxInput
                            type="checkbox"
                            {...register("isConfirmed")}
                        />
                        <$Checkbox />
                    </$CheckboxContainer>
                    <$CheckboxLabel>I confirm that I have read and accepted <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a></$CheckboxLabel>
                </label>
                {errors.isConfirmed && (
                    <$ErrorMessage>{errors.isConfirmed.message}</$ErrorMessage>
                )}
            </div>

            <Button variant="success" type="submit">Submit Review</Button>
        </form>
    )
};
