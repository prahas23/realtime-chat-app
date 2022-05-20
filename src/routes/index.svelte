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

    function playSound() {
        let audio = document.getElementById('saber');
        audio.play();
    }

    function stopSound() {
        let audio = document.getElementById('saber');
        audio.pause();
        audio.currentTime = 0;
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
                    <audio id="saber" preload="auto">
                        <source src="src/audio/saber.mp3">
                    </audio>
                    <!-- <audio id="saber1" preload="auto">
                        <source src="/src/audio/saber1.mp3">
                    </audio> -->
                    <button type="submit" class="submit-btn" on:mouseover={playSound} on:mouseleave={stopSound} on:focus="{playSound}">
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

<style>
    @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

    #login-page{
    margin: 0;
    padding: 0;
    background-color: #212121;
    overflow: hidden;
    }

    .login-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        border-radius: 30px;
        background: #212121;
        box-shadow: 15px 15px 30px rgb(25, 25, 25),
                    -15px -15px 30px rgb(60, 60, 60);
    }

    .login-container h1 {
        text-align: center;
        padding: 0 0 20px 0;
        font-family: 'Righteous', cursive;
        font-size: 30px;
        color: #ef2a00;
        border-bottom: 1px solid #ef2a00;
    }

    .login-info {
        padding: 0 40px;
        box-sizing: border-box;
    }

    .username {
        position: relative;
        border-bottom: 2px solid #adadad;
        font-family: 'Righteous', cursive;
        margin: 30px 0;
    }

    input, select {
        color: #adadad;
    }

    .username input {
        width: 100%;
        padding: 0 5px;
        height: 40px;
        font-size: 16px;
        border: none;
        background: none;
        outline: none;
    }

    .username label  {
        position: absolute;
        top: 50%;
        left: 5px;
        color: #adadad;
        transform: translateY(-50%);
        font-size: 16px;
        pointer-events: none;
        transition: .5s;
    }

    .username span::before {
        content: '';
        position: absolute;
        top: 40px;
        left: 0;
        width: 100%;
        height: 2px;
        background: #ef2a00;
    }

    .username input:focus ~ label,
    .username input:valid ~ label {
        top: -5px;
        color:  #ef2a00;
    }

    .field {
        display: block;
        margin-top: 35px;
    }

    .field span {
        position: relative;
        font-family: 'Righteous', cursive;
        font-size: 16px;
        color: #adadad;
        left: 5px;
        transition: 0.1s;
    }

    .field select {
        margin-top: 5px;
        padding: 5px;
        color: #adadad;
        width: 100%;
        border: 3px solid #ef2a00;
        background: #212121;
    }

    .button {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .submit-btn {
        position: relative;
        padding: 1em 1.8em;
        outline: none;
        border: 1px solid #303030;
        background: #212121;
        color: #adadad;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 15px;
        font-family: 'Righteous', cursive;
        overflow: hidden;
        transition: 0.2s;
        border-radius: 20px;
        cursor: pointer;
        font-weight: bold;
        margin: 35px;
    }

    button:hover {
        box-shadow: 0 0 10px #ef2a00, 0 0 25px #ef2a00, 0 0 50px #ef2a00;
        color: #ef2a00;
        transition-delay: 0.6s;
    }

    button span {
        position: absolute;
    }

    button span:nth-child(1) {
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #ef2a00);
    }

    button:hover span:nth-child(1) {
        left: 100%;
        transition: 0.7s;
    }

    button span:nth-child(3) {
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #ef2a00);
    }

    button:hover span:nth-child(3) {
        right: 100%;
        transition: 0.7s;
        transition-delay: 0.35s;
    }

    button span:nth-child(2) {
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #ef2a00);
    }

    button:hover span:nth-child(2) {
        top: 100%;
        transition: 0.7s;
        transition-delay: 0.17s;
    }

    button span:nth-child(4) {
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(360deg, transparent, #ef2a00);
    }

    button:hover span:nth-child(4) {
        bottom: 100%;
        transition: 0.7s;
        transition-delay: 0.52s;
    }

    button:active {
        background: #ef2a00;
        background: linear-gradient(to top right, #ef2a00, #ef2a00);
        color: #bfbfbf;
        box-shadow: 0 0 8px #ef2a00, 0 0 8px #ef2a00, 0 0 8px #ef2a00;
        transition: 0.1s;
    }

    button:active span:nth-child(1) 
        span:nth-child(2) 
        span:nth-child(2) 
        span:nth-child(2) {
        transition: none;
        transition-delay: none;
    }
</style>
