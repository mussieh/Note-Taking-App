import sampleData from "./data.json";
import { prisma } from "./prisma";

async function createUser() {
    try {
        await prisma.user.create({
            data: {
                email: "testUser@example.com",
                password: "password123",
            },
        });
        console.log("User created successfully!");
    } catch (error) {
        console.error("Error creating notes:", error);
    }
}

async function createNotes() {
    try {
        await prisma.note.deleteMany();
        await prisma.note.createMany({
            data: sampleData.notes,
        });
        console.log("Notes created successfully!");
    } catch (error) {
        console.error("Error creating notes:", error);
    }
}

// createUser();
createNotes();
