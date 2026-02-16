import React from "react"

export type MockUserInfoType = {
    name: string,
    birthday: string,
    flagBirth: string,
    active: string
  }

export interface MemberFieldsDetailsProps {
    title: string,
    placeholder: string,
    icon: React.ReactNode,
    subtitle: string,
    type: string,
  }