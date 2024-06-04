const SignUp = () => {
    return (
        <div>
            <h2>PLEASE LOG IN FIRST TO ACCESS BLOG</h2>
            <form>
                <input type="text" placeholder="username" name="name" />

                <input type="email" placeholder="email@" name="email" />

                <input type="password" placeholder="password" name="password" />

                <button>Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
