const submitHandler = async (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
        return toast.error("Please complete the form above");
    }

    setLoading(true);

    try {
        const response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, subject, message }),
        });

        const data = await response.json();

        if (response.ok) {
            toast.success(data.message);
        } else {
            toast.error(data.error);
        }
    } catch (error) {
        console.error("Error:", error);
        toast.error("Something went wrong!");
    }

    setLoading(false);
};
