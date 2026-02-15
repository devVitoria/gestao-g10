import React from "react"

export type mockUserInfoType = {
    name: string,
    birthday: string,
    flagBirth: string,
    active: string
  }

export interface memberFieldsDetailsProps {
    title: string,
    placeholder: string,
    icon: React.ReactNode,
    subtitle: string,
    type: string,
  }