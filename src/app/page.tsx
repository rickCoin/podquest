"use client";
import React, { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { HERO_SECTION_TEXT } from "./constant";
import SignInButton from "./components/buttons/SignInButton";
import { useRouter } from "next/navigation";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase/config";

export default function Home() {
    const router = useRouter();
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            // Check if the user object exists
            if (result.user) {
                console.log("User login");
                // Redirect to the main page
                router.push("/main");
            } else {
                console.error("User not found");
                // Handle the case when the user object is not available
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="bg-primary min-h-screen flex flex-col">
            <title>PodQuest</title>
            <HeroSection
                title={HERO_SECTION_TEXT.ONE_LINER}
                description={HERO_SECTION_TEXT.DESCRIPTION}
            />
            <SignInButton text="Sign In" onClick={handleGoogleLogin} />
        </div>
    );
}
