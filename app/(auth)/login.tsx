import { Link, router } from "expo-router";
import { Formik } from "formik";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import * as Yup from "yup";
import { Button } from "../../components/ui/Button";
import { TextInput } from "../../components/ui/TextInput";
import { useAuth } from "../../utils/AuthContext";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function LoginScreen() {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      setIsLoading(true);
      await login(values.email, values.password);
      router.replace("/(app)");
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-gradient-to-b from-blue-600 to-blue-800 p-6">
      <View className="flex-1 justify-center">
        <View className="items-center mb-8">
          <View className="w-20 h-20 bg-white rounded-full items-center justify-center mb-4 shadow-lg">
            <Text className="text-3xl font-bold text-blue-600">
              Emmanuel saleem
            </Text>
          </View>
          <Text className="text-4xl font-bold text-white mb-2">
            Welcome Back
          </Text>
          <Text className="text-white/80 text-center text-base">
            Sign in to continue your learning journey
          </Text>
        </View>

        <View className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={handleLogin}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View>
                <TextInput
                  label="Email"
                  placeholder="Enter your email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={
                    touched.email && errors.email ? errors.email : undefined
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />

                <TextInput
                  label="Password"
                  placeholder="Enter your password"
                  secureTextEntry
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  error={
                    touched.password && errors.password
                      ? errors.password
                      : undefined
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />

                <TouchableOpacity className="self-end mt-2">
                  <Text className="text-white/80">Forgot Password?</Text>
                </TouchableOpacity>

                <Button
                  title="Sign In"
                  onPress={() => handleSubmit()}
                  isLoading={isLoading}
                  className="mt-6 bg-white"
                />

                <View className="flex-row justify-center mt-6">
                  <Text className="text-white/80">
                    Do not have an account?{" "}
                  </Text>
                  <Link href="/(auth)/register" asChild>
                    <TouchableOpacity>
                      <Text className="text-white font-semibold">Sign Up</Text>
                    </TouchableOpacity>
                  </Link>
                </View>
              </View>
            )}
          </Formik>
        </View>

        <View className="mt-8">
          <Text className="text-white/60 text-center text-sm">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </Text>
        </View>
      </View>
    </View>
  );
}
