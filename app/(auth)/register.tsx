import { Link, router } from "expo-router";
import { Formik } from "formik";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import * as Yup from "yup";
import "../../app/global.css";
import { Button } from "../../components/ui/Button";
import { TextInput } from "../../components/ui/TextInput";
import { useAuth } from "../../utils/AuthContext";
import { UserRole } from "../../utils/types";

const registerSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  role: Yup.string()
    .oneOf(["student", "teacher", "parent"])
    .required("Role is required"),
});

export default function RegisterScreen() {
  const { register } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRole>("student");

  const handleRegister = async (values: {
    name: string;
    email: string;
    password: string;
    role: UserRole;
  }) => {
    try {
      setIsLoading(true);
      await register(values.email, values.password, values.name, values.role);
      router.replace("/(app)");
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const roles: UserRole[] = ["student", "teacher", "parent"];

  return (
    <View className="flex-1 bg-white p-6">
      <View className="flex-1 justify-center">
        <Text className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Create Account
        </Text>

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: selectedRole,
          }}
          validationSchema={registerSchema}
          onSubmit={handleRegister}
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
                label="Full Name"
                placeholder="Enter your full name"
                value={values.name}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                error={touched.name && errors.name ? errors.name : undefined}
              />

              <TextInput
                label="Email"
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                error={touched.email && errors.email ? errors.email : undefined}
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
              />

              <TextInput
                label="Confirm Password"
                placeholder="Confirm your password"
                secureTextEntry
                value={values.confirmPassword}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                error={
                  touched.confirmPassword && errors.confirmPassword
                    ? errors.confirmPassword
                    : undefined
                }
              />

              <View className="mb-6">
                <Text className="text-sm font-medium text-gray-700 mb-2">
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
                title="Sign Up"
                onPress={() => handleSubmit()}
                isLoading={isLoading}
                className="mt-6"
              />

              <View className="flex-row justify-center mt-6">
                <Text className="text-gray-600">Already have an account? </Text>
                <Link href="/(auth)/login" asChild>
                  <TouchableOpacity>
                    <Text className="text-blue-600 font-semibold">Sign In</Text>
                  </TouchableOpacity>
                </Link>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}
