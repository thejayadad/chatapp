"use client";

import { ReactNode } from "react";
import { Authenticated, AuthLoading, ConvexReactClient } from "convex/react";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import LoadingLogo from "./components/logo/loading";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function ConvexClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>

        <Authenticated>
        {children}
        </Authenticated>
        <AuthLoading>
          <LoadingLogo />

        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}