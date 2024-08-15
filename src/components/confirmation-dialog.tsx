'use client';

import { useRouter } from 'next/navigation';
import { useMealStore } from "../providers/meal-store-provider";
import { useDialogStore } from "../providers/dialog-store-provider";
import { Button } from "@/src/ui/button";
import { Title } from "@/src/ui/title";
import { $Backdrop, $Dialog, $DialogBody, $DialogFooter, $DialogHeader } from "./confirmation-dialog.styled";
import { useState } from 'react';

export const ConfirmationDialog = () => {
    const router = useRouter();
    const { dialogData: userData, hideDialog } = useDialogStore((state) => ({
        dialogData: state.dialogData,
        hideDialog: state.hideDialog,
    }));
    const postMealReview = useMealStore((state) => state.postMealReview);

    const handleSubmitData = () => {
        if (!userData) {
            console.error("No dialog data available for submission");
            return;
        }

        try {
            postMealReview(userData);
        } catch (error) {
            console.error(`Failed to submit review: ${error}`);
        } finally {
            hideDialog();
            router.push('/review-success');
        }
    }

    return (
        <$Backdrop>
            <$Dialog>
                <$DialogHeader>
                    <Title tag="h2">Confirmation</Title>
                </$DialogHeader>
                <$DialogBody>
                    <span>Are you sure you want to submit this review?</span>
                </$DialogBody>
                <$DialogFooter>
                    <Button variant='success' onClick={handleSubmitData}>Yes</Button>
                    <Button variant='default' onClick={hideDialog}>No</Button>
                </$DialogFooter>
            </$Dialog>
        </$Backdrop>
    );
};
