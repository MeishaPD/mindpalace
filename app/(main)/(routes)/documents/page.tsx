"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const DocumentsPage = () => {

    const { user } = useUser();

    const create = useMutation(api.documents.create);

    const onCreate = () => {
        const promise = create({
            title: "Untitled Document",
        });

        toast.promise(promise, {
            loading: "Creating a new note...",
            success: "Note created successfully!",
            error: "Failed to create a new note.",
        });
    };

    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image
                src="/create-document.png"
                width={300}
                height={300}
                alt="Create Document"
                className="dark:hidden"
            />
            <Image
                src="/create-document-dark.png"
                width={300}
                height={300}
                alt="Create Document"
                className="hidden dark:block"
            />
            <h2 className="text-lg font-medium">
                Welcome to {user?.username}&apos;s Documents Page!
            </h2>
            <Button onClick={onCreate}>
                <PlusCircle className="h-6 w-6 mr-2" />
                Create a note
            </Button>
        </div>
    );
}

export default DocumentsPage;