import { Link, router } from "expo-router";
import { Formik } from "formik";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import * as Yup from "yup";
import { Button } from "../../components/ui/Button";
import { TextInput } from "../../components/ui/TextInput";
import { useAuth } from "../../utils/AuthContext";
import { UserRole } from "../../utils/types";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  role: Yup.string()
    .oneOf(["student", "teacher", "parent"])
    .required("Role is required"),
});

export default function LoginScreen() {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRole>("student");

  const handleLogin = async (values: { email: string; password: string; role: UserRole }) => {
    try {
      setIsLoading(true);
      await login(values.email, values.password, values.role);
      router.replace("/(app)/dashboard");
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const roles: UserRole[] = ["student", "teacher", "parent"];

  return (
    <View className="flex-1 bg-white p-6">
      <View className="flex-1 justify-center">
        <View className="items-center mb-8">
          <View className="w-20 h-20 bg-blue-50 rounded-full items-center justify-center mb-4 shadow-lg">
            <Text className="text-3xl font-bold text-blue-600">
              Emmanuel saleem
            </Text>
          </View>
          <Text className="text-4xl font-bold text-black mb-2">
            Welcome Back
          </Text>
          <Text className="text-black/80 text-center text-base">
            Sign in to continue your learning journey
          </Text>
        </View>

        <View className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
          <Formik
            initialValues={{ email: "", password: "", role: selectedRole }}
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />

                <View className="mb-6">
                  <Text className="text-sm font-medium text-black mb-2">
                    Select Role
                  </Text>
                  <View className="flex-row justify-between">
                    {roles.map((role) => (
                      <TouchableOpacity
                        key={role}
                        onPress={() => {
                          setSelectedRole(role);
                          handleChange("role")(role);
                        }}
                        className={`flex-1 mx-1 p-3 rounded-lg border ${
                          selectedRole === role
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-300"
                        }`}
                      >
                        <Text
                          className={`text-center capitalize ${
                            selectedRole === role
                              ? "text-blue-600 font-semibold"
                              : "text-gray-600"
                          }`}
                        >
                          {role}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>

                <TouchableOpacity 
                  className="self-end mt-2"
                  onPress={() => router.push("/(auth)/forgot-password")}
                >
                  <Text className="text-blue-600">Forgot Password?</Text>
                </TouchableOpacity>

                <Button
                  title="Sign In"
                  onPress={() => handleSubmit()}
                  isLoading={isLoading}
                  className="mt-6 bg-blue-600"
                />

                <View className="flex-row justify-center mt-6">
                  <Text className="text-gray-600">
                    Do not have an account?{" "}
                  </Text>
                  <Link href="/(auth)/register" asChild>
                    <TouchableOpacity>
                      <Text className="text-blue-600 font-semibold">Sign Up</Text>
                    </TouchableOpacity>
                  </Link>
                </View>
              </View>
            )}
          </Formik>
        </View>

        <View className="mt-8">
          <Text className="text-black/60 text-center text-sm">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </Text>
        </View>
      </View>
    </View>
  );
}
