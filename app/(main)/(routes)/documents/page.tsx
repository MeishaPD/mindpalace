"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const DocumentsPage = () => {

    const { user } = useUser();

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
                Welcome to the Documents Page! {user?.username}&apos;s documents will be displayed here.
            </h2>
            <Button>
                <PlusCircle className="h-6 w-6 mr-2" />
                Create a note
            </Button>
        </div>
     );
}
 
export default DocumentsPage;