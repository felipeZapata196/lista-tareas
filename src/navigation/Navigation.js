import React from "react";
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage";
import { Route, Redirect } from "wouter";

export function HomeNavigation(navigation) {
  return (
    <>
      <Redirect to="/" />
      <Route path="/" component={HomePage}/>
    </>
  );
}

export function AuthNavigation(navigation) {
  return (
    <>
      <Redirect to='/login' />
      <Route path="/login" component={LoginPage}/>
    </>
  );
}

