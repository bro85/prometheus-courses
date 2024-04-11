import React, { FC } from 'react';
import {
  Dashboard,
  DashboardSide,
  Form,
  FormLabel,
  FieldWrap,
  FormInput,
  FormBtn,
  FormBtnInner,
  DashboardContainer,
  DashboardTitle,
} from './components/StyledComponents';
import { Course } from '../courseItem/interfaces/course';
import { CourseItem } from '../courseItem/CourseItem';

interface MyCoursesProps {
  data?: Course[];
  loading: boolean;
  searchVal: string;
  search: (searchText: string) => void;
  removeElem: (removeID: string) => void;
}

export const MyCourses: FC<MyCoursesProps> = ({
  data,
  loading,
  search,
  searchVal,
  removeElem,
}) => {
  const hasNoItems = !!data && !loading && !data.length;
  return (
    <Dashboard>
      <DashboardContainer>
        <DashboardTitle>Мои курсы</DashboardTitle>
        {!!data?.length && (
          <div>
            {data.map((item) => (
              <CourseItem
                course={item}
                key={item.id}
                removeCourse={removeElem}
              />
            ))}
          </div>
        )}
        {hasNoItems && <>Sorry, you have no courses yet.</>}
        {loading && <>Loading...</>}
      </DashboardContainer>
      <DashboardSide>
        <Form>
          <FormLabel htmlFor="dashboard-search-input">
            Поиск по вашим курсам
          </FormLabel>
          <FieldWrap>
            <FormInput
              id="dashboard-search-input"
              type="text"
              value={searchVal}
              onChange={(e) => {
                search(e.target.value);
              }}
            />
            <FormBtn>
              <FormBtnInner></FormBtnInner>
            </FormBtn>
          </FieldWrap>
        </Form>
      </DashboardSide>
    </Dashboard>
  );
};
