export const meta = {
    name: "hello",
    description: "hello skill",
    input: {
        type: "object",
        properties: {
            name: { type: "string" }
        },
        required: ["name"]
    }
};

export async function run({ name }) {
    return { message: `Hello ${name}` };
}