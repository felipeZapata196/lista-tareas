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

// En App tengo que importar las funciones y dependiendo de si esta logueado o no, lanzar una u otra.