import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

//component
import Button from "Components/Common/Button";

//Img
import QuestionMark from "../../assets/challengeImg/setting/common/questionmark.svg";
import Alert from "../../assets/challengeImg/setting/common/alert.svg";
import ToolTip from "../../assets/challengeImg/setting/common/tooltip.png";

function ChallengeForm() {
  const [inputFocus, setInputFocus] = useState(false);
  const { control, handleSubmit, watch } = useForm();

  const formRef = useRef<HTMLFormElement | null>(null);
  const navigate = useNavigate();
  const { challengeName } = useParams();

  const formatNumber = (value: any) => {
    if (!value) return "";
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  /*value를 문자열로 변환 후 숫자 형식을 지정 천 단위 구분 기호로 쉼표를 삽입 */

  /* const inputValue = watch("priceValue"); */

  /*   console.log(inputValue); */

  const onSubmit = (data: any) => {
    console.log(data);

    if (typeof challengeName === "undefined") {
      console.error("Challenge name is undefined.");
      //challengeName이 undefined이면 실행을 방지해서 오류를 막음
      return;
    }

    let updateValues = [];
    updateValues.push(data);
    localStorage.setItem(challengeName, JSON.stringify(updateValues));

    navigate(`/challengeinit/${challengeName}/challengestart`, {
      replace: true,
    });
  };
  //localStorage에 넣을떄는 문자열로 변환해서 넣어야됨
  //반대로 꺼낼때는 숫자로 변환해서 나오게 하기

  const submitForm = () => {
    if (formRef.current) {
      const submitButton = formRef.current.querySelector(
        '[type="submit"]'
      ) as HTMLButtonElement | null;
      if (submitButton) {
        submitButton.click();
      }
    }
  };
  // submitForm 함수는 호출 시 양식 내부의 제출 버튼 클릭을 트리거함.
  // form안에 있는 button과 form 밖에 있는 버튼을 연결하기 위해 사용

  return (
    <>
      <div className="relative w-full h-14 mb-20">
        <span className="absolute left-2 text-grayColor font-medium">
          Price
        </span>

        <div className="relative flex justify-center items-center mt-7 h-14 border-2 border-mintColor rounded-lg overflow-hidden">
          <form
            ref={formRef}
            className="w-full  relative flex items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="priceValue"
              control={control}
              rules={{
                validate: (value) =>
                  value !== "" || "가격(숫자)를 반드시 입력해 주세요!",
              }}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <input
                    className="w-full h-14 pl-4 pr-16 py-2 bg-transparent focus:outline-none text-mintColor text-xl font-extrabold"
                    onFocus={() => setInputFocus(true)}
                    onBlur={() => setInputFocus(false)}
                    value={formatNumber(value)}
                    onChange={(e) => {
                      let value = e.target.value; //현재값 들고오기
                      let formattedValue = value.replace(/[^0-9]/g, ""); //숫자가 아닌 문자열제거
                      if (
                        formattedValue.startsWith("0") &&
                        formattedValue.length > 1
                      ) {
                        formattedValue = formattedValue.substring(1);
                      }
                      //input의 숫자 시작값이 0이 표시되는것을 방지
                      onChange(formattedValue);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === `Enter`) {
                        e.preventDefault();
                      }
                    }}
                    //Enter키 submit 방지
                  />
                  {error && (
                    <p className="absolute left-5 text-xs text-red-300 font-black pointer-events-none">
                      {error.message}
                    </p>
                  )}
                </>
              )}
            />

            <button type="submit" style={{ display: "none" }} />

            <span className="text-xl text-mintColor absolute bottom-3 right-10 font-semibold">
              원
            </span>
          </form>

          <img
            src={QuestionMark}
            alt="QuestionMark"
            className="absolute right-2 w-[20px] h-[20px]"
          />
        </div>

        {inputFocus && (
          <>
            <img src={Alert} alt="Alert" className="absolute -bottom-16" />

            <img
              src={require(`../../assets/challengeImg/setting/${challengeName}Tooltip.svg`)}
              alt={`${challengeName}_ToolTip`}
              className="absolute -right-1 -top-1"
            />
          </>
        )}
      </div>

      <div className="flex-grow"></div>

      <div className="w-full" onClick={submitForm}>
        <Button text="완료하기" />
      </div>
    </>
  );
}

export default ChallengeForm;
