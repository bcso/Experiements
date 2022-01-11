import React from "react";

export interface IPageInProgressProps {
    pageTitle : string;
    pageDescription? : string;
}

export interface IPageBaseLayoutProps {
    pageTitle?: string;
    children?: React.ReactNode;
}