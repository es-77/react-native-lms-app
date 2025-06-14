import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import * as Yup from "yup";
import { Button } from "../../components/ui/Button";
import { TextInput } from "../../components/ui/TextInput";
import { UserRole } from "../../utils/types";

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  role: Yup.string()
    .oneOf(["student", "teacher", "parent"])
    .required("Role is required"),
});

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRole>("student");
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleForgotPassword = async (values: { email: string; role: UserRole }) => {
    try {
      setIsLoading(true);
      // TODO: Implement forgot password logic
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setIsEmailSent(true);
    } catch (error) {
      console.error("Forgot password error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToLogin = () => {
    setIsLoading(true);
    router.replace("/(auth)/login");
  };

  const roles: UserRole[] = ["student", "teacher", "parent"];

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center p-4 border-b border-gray-200">
        <TouchableOpacity 
          onPress={handleBackToLogin}
          className="p-2 -ml-2"
        >
          <Ionicons name="arrow-back" size={24} color="#2563eb" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold text-black ml-2">
          Forgot Password
        </Text>
      </View>

      <View className="flex-1 p-6">
        <View className="flex-1 justify-center">
          <View className="items-center mb-8">
            <View className="w-20 h-20 bg-blue-50 rounded-full items-center justify-center mb-4 shadow-lg">
              <Text className="text-3xl font-bold text-blue-600">
                Emmanuel saleem
              </Text>
            </View>
            <Text className="text-4xl font-bold text-black mb-2">
              Forgot Password
            </Text>
            <Text className="text-black/80 text-center text-base">
              Enter your email and role to reset your password
            </Text>
          </View>

          {!isEmailSent ? (
            <View className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <Formik
                initialValues={{ email: "", role: selectedRole }}
                validationSchema={forgotPasswordSchema}
                onSubmit={handleForgotPassword}
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

                    <Button
                      title="Reset Password"
                      onPress={() => handleSubmit()}
                      isLoading={isLoading}
                      className="mt-6 bg-blue-600"
                    />

                    <View className="flex-row justify-center mt-6">
                      <Text className="text-gray-600">
                        Remember your password?{" "}
                      </Text>
                      <TouchableOpacity onPress={handleBackToLogin}>
                        <Text className="text-blue-600 font-semibold">Sign In</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </Formik>
            </View>
          ) : (
            <View className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <View className="items-center">
                <Text className="text-xl font-semibold text-black mb-2">
                  Check Your Email
                </Text>
                <Text className="text-gray-600 text-center mb-6">
                  We have sent password reset instructions to your email address.
                </Text>
                <Button
                  title="Back to Login"
                  onPress={handleBackToLogin}
                  isLoading={isLoading}
                  className="mt-6 bg-blue-600"
                />
              </View>
            </View>
          )}

          <View className="mt-8">
            <Text className="text-black/60 text-center text-sm">
              By continuing, you agree to our Terms of Service and Privacy Policy
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
} 