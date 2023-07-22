import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <section id="mb" className="container mx-auto px-6 mt-8">
      <SignIn />
    </section>
  );
};

export default SignInPage;
