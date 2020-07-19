import { withAuthWrapper } from "../hoc/withAuthWrapper";
import Layout from "../layout/layout";
import RegisterForm from "../components/main/registerForm";
import LoginForm from "../components/main/loginForm";

function Home({ onGithubSignIn, onGoogleSignIn, loading }) {
  const handleSubmit = () => {
    return;
  };
  return (
    <Layout>
      <div className="flex mx-auto">
        <div className="w-1/2 ">
          
        </div>
        <div className="w-1/2  bg-red-600 ">
          {loading ? (
            <p>Login please wait</p>
          ) : (
            <div className="flex  flex-wrap w-full mt-4">
              <div className="  mx-auto  mt-12 z-20 w-3/6  center-text  flex flex-col ">
                <LoginForm />
                <div className="mx-auto mt-2 mb-2 font-medium text-gray-300">
                  <span>...</span>
                </div>

                <button
                  className=" bg-gray-700  rounded  shadow-2xl h-12 text-white"
                  onClick={onGoogleSignIn}
                >
                  Signin with Google
                </button>

                <button
                  className=" bg-blue-700  shadow-2xl rounded mt-4 h-12 text-white"
                  onClick={onGoogleSignIn}
                >
          
                  Signin with Facebook
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default withAuthWrapper(Home);
