import { use, useEffect } from "react";
import { useRef } from "react"

export const usePeliculas = () => {
    const fetched = useRef(false);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (fetched.current) return;
        fetched.current = true;

        const fetchPeliculas = async () => {
            try {
                const res = await getPel