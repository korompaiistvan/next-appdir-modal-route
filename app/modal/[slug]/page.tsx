"use client"
import {useRouter} from 'next/navigation'
import { MouseEventHandler } from 'react'
export default function ModalPage({ params }: { params: { slug: string } }) {
    const router = useRouter()
    const handleClick = ((e) => {
        if (e.target !== e.currentTarget) return
        router.push('/')
    }) satisfies MouseEventHandler<HTMLDivElement>
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#fff6",
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={handleClick}
    >
      <div
        style={{
          width: "400px",
          height: "200px",
          backgroundColor: "#fff",
          color: "#000",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginTop: "20%" }}> {params.slug}</h1>
      </div>
    </div>
  );
}
