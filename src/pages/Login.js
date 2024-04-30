import NavBar from "../components/NavBar.js"

function Login(){
    return(
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <h1>Login.js</h1>
                <form>
                    <div>
                        <label for="username">Username: </label>
                        <input id="username" type="text" name="username" placeholder="Username"></input>
                    </div>
                    <br/>
                    <div>
                        <label for="password">Username: </label>
                        <input id="password" type="text" name="password" placeholder="Password"></input>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </main>
        </>
    )
}

export default Login