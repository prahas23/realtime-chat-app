<link rel="stylesheet" href="/src/style.css">

<script>
    function redirect() {
        let select = document.getElementById('selectOptions').value;
        
        if (select === "Chill") {
            window.location.href = "chill";
        }

        else if (select === "Study") {
            window.location.href = "study";
        }
    }

</script>

<title>PrayneChat</title>

<body id="login-page">
    <section class="login-container">
        <header>
        <h1>PrayneChat</h1>
        </header>
        <main class="login-info">
            <form on:submit|preventDefault={redirect}>
                <div class="username">
                    <input type="text" name="username" id="username" required />
                    <span></span>
                    <label for="username">Username</label>
                </div>
                <div class="field">
                    <span>Chatroom</span>
                    <select id="selectOptions">
                        <option id="chillOption" value="Chill">Chill</option>
                        <option id="studyOption" value="Study">Study</option>
                        <span></span>
                    </select>
                </div>
                <div class="button">
                    <button type="submit" class="submit-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span> Join Chatroom
                    </button>
                </div>
            </form>
        </main>
    </section>
</body>
