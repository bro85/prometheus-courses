import { Course } from './interfaces/course';
import {
  CoursesAction,
  CoursesActionBtn,
  CoursesActionBtn2,
  CoursesActionImg,
  CoursesItem,
  CoursesItemBtn,
  CoursesItemControls,
  CoursesItemDescription,
  CoursesItemImage,
  CoursesItemInfo,
  CoursesItemInner,
  CoursesItemPic,
  CoursesItemSchool,
  CoursesItemTitle,
  CoursesItemTitleLink,
  CoursesItemWrap,
  DropDown,
  DropDownWrap,
  DropDownItem,
  DropDownItemButton,
  Popup,
  PopupWrap,
  PopupHide,
  PopupHeader,
  PopupFooter,
  PopupBtn,
} from './components/StyledComponents';
import { FC, useState } from 'react';

interface CourseItemProps {
  course: Course;
  removeCourse: (removeID: string) => void;
}
export const CourseItem: FC<CourseItemProps> = ({ course, removeCourse }) => {
  const [isDropdownOpened, setDropdownOpened] = useState<boolean>(false);
  const [isPopupShowed, setPopupShowed] = useState<boolean>(false);

  return (
    <CoursesItem key={course.id}>
      <CoursesItemPic href="#">
        <CoursesItemImage
          src={course.pic}
          alt={course.title}
        ></CoursesItemImage>
      </CoursesItemPic>
      <CoursesItemWrap>
        <CoursesItemInner>
          <CoursesItemTitle>
            <CoursesItemTitleLink href="#">{course.title}</CoursesItemTitleLink>
          </CoursesItemTitle>
          <CoursesItemInfo>
            <CoursesItemSchool>{course.university} - </CoursesItemSchool>
            <CoursesItemDescription>
              Курс начался: {course.startDate}
            </CoursesItemDescription>
          </CoursesItemInfo>
        </CoursesItemInner>
        <CoursesItemControls>
          <CoursesItemBtn href="#">Посмотреть курс</CoursesItemBtn>
          <CoursesAction>
            <CoursesActionBtn href="#">
              <CoursesActionImg src="/img/facebook-f.svg"></CoursesActionImg>
            </CoursesActionBtn>
            <CoursesActionBtn href="#">
              <CoursesActionImg src="/img/twitter.svg"></CoursesActionImg>
            </CoursesActionBtn>
            <CoursesActionBtn2
              onClick={() => setDropdownOpened(!isDropdownOpened)}
            >
              <CoursesActionImg src="/img/cog.svg"></CoursesActionImg>
              {isDropdownOpened && (
                <DropDown>
                  <DropDownWrap>
                    <DropDownItemButton onClick={() => setPopupShowed(true)}>
                      Отменить регистрацию
                    </DropDownItemButton>
                    <DropDownItem href="#">Настройка рассылок</DropDownItem>
                  </DropDownWrap>
                </DropDown>
              )}
            </CoursesActionBtn2>
          </CoursesAction>
        </CoursesItemControls>
      </CoursesItemWrap>
      {isPopupShowed && (
        <Popup>
          <PopupWrap>
            <PopupHide onClick={() => setPopupShowed(false)}></PopupHide>
            <PopupHeader>{course.title}</PopupHeader>
            <PopupFooter>
              <PopupBtn type="button" onClick={() => removeCourse(course.id)}>
                Отменить регистрацию
              </PopupBtn>
            </PopupFooter>
          </PopupWrap>
        </Popup>
      )}
    </CoursesItem>
  );
};
