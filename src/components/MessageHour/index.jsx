'use client'

export default function MessageHour() {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();

    return <p>{hour}:{minutes}</p>
}