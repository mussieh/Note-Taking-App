"use client";

import { signOut } from "next-auth/react";

const NotesPage = () => {
    return <button onClick={() => signOut()}>Sign Out</button>;
};

export default NotesPage;
