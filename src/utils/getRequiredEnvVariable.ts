export default function getRequiredEnvVariable(name: string) {
    const value = process.env[name];

    if (value === undefined) {
        throw new Error(`Please specify the ${name} environment variable.`);
    }

    return value;
}
