import React from "react"
import Back from "../common/back/Back"
import { coursesCard } from './../../../dummydata';

const CourseHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      <coursesCard />
      <OnlineCourses />
    </>
  )
}

export default CourseHome