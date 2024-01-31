import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";

//util
import { challengeLayout } from "Util/tailwindStyle";

//component
import BottomNav from "Components/Common/BottomNav";
import TopNav from "Components/Common/TopNav";
import Button from "Components/Common/Button";

//Img
import CoffeeBean from "../../assets/challengeImg/setting/coffeeBean.png";
import CoffeeBeanTitle from "../../assets/challengeImg/setting/coffeeBeanTitle.png";
import QuestionMark from "../../assets/challengeImg/setting/common/questionmark.png";
import Alert from "../../assets/challengeImg/setting/common/alert.png";
import ToolTip from "../../assets/challengeImg/setting/common/tooltip.png";

function Setting() {
  const [inputFocus, setInputFocus] = useState(false);
  const { control, handleSubmit, watch } = useForm();

  const formatNumber = (value: any) => {
    if (!value) return "";
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  /*value를 문자열로 변환 후 숫자 형식을 지정 천 단위 구분 기호로 쉼표를 삽입 */

  const inputValue = watch("priceValue");

  console.log(inputValue);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <TopNav />
      <div className={`${challengeLayout} flex flex-col items-center`}>
        <img src={CoffeeBean} alt="CoffeeBean" className="pb-7" />
        <img src={CoffeeBeanTitle} alt="CoffeeBeanTitle" className="pb-12" />

        <div className="relative w-full h-14 mb-20">
          <span className="absolute left-2 text-grayColor font-medium">
            Price
          </span>

          <div className="relative flex justify-center items-center mt-7 h-14 border-2 border-mintColor rounded-lg overflow-hidden">
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="priceValue"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <input
                    className="w-full h-14 pl-4 pr-10 py-2 bg-transparent focus:outline-none text-mintColor text-xl font-extrabold"
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
                    /* onKeyDown={(e) => {
                      if (e.key === `Enter`) {
                        e.preventDefault();
                      }
                    }} */
                    //Enter키 submit 방지
                  />
                )}
              />
            </form>

            <img
              src={QuestionMark}
              alt="QuestionMark"
              className="absolute right-2"
            />
          </div>

          {inputFocus && (
            <>
              <img src={Alert} alt="Alert" className="absolute -bottom-16" />
              <img
                src={ToolTip}
                alt="ToolTip"
                className="absolute -right-1 -top-1"
              />
            </>
          )}
        </div>
        {/* 가격설정 input */}

        <div className="flex-grow"></div>

        <div className="w-full">
          <Button text="완료하기" type="submit" />
        </div>

        <BottomNav />
      </div>
    </div>
  );
}

export default Setting;
