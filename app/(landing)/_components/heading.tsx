"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Your Ideas, Documents, and Plans. Unified. Welcome to <span className="underline">MindPalace</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Mind Palace is the connected workspace for your personal and professional life.
            </h3>
            <Button>
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </div>
    )
}