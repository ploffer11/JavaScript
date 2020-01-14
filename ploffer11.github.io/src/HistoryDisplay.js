import React, { Component } from 'react';
import History from "./History";

export class HistoryDisplay extends Component {
    render() {
        let history = [
            ["2017.03", "Arduino를 사용해 드론 SW 융합 프로젝트 진행"],
            ["2017.06", "고양시 드론 종합 경진대회 SW 융합 부문 2위"],
            ["2018.03", "한양대학교 컴퓨터 소프트웨어학부 입학"],
            ["2018.03", "한양대학교 알고리즘 동아리 ALOHA 가입"],
            ["2018.03", "Baekjoon Online Judge 가입"],
            ["2018.11", "HCPC div2 3위"],
            ["2019.01", "Codeforces expert 도달"],
            ["2019.06", "Baekjoon Online Judge 1000문제"],
            ["2019.07", "Samsung Brightics를 사용해 키와 허리둘레로 몸무게 선형회귀 모델링 및 시각화 프로젝트"],
            ["2019.08", "UCPC 본선 진출"],
            ["2019.08", "숭실대 고려대 한양대 알고리즘 동아리 연합 대회 div1 3위"],
            ["2019.08", "비트코인 트레이딩 봇 제작"],
            ["2019.08", "CNN을 이용한 얼굴 국적 분류 프로젝트"],
            ["2019.09", "카카오 신입 개발자 공개채용 온라인 코딩테스트 합격"],
            ["2019.10", "ICPC Seoul Resional 진출"],
            ["2019.11", "HCPC 검수진 자격으로 대회 준비"],
            ["2019.11", "P2P 통신을 Java를 사용해 TCP통신과 멀티스레드 기반으로 구현"],
            ["2019.12", "On-Disk Based B+ Tree로 Database 구현"],
            ["2020.01", "React.js를 이용해 ploffer11.github.io 웹앱 제작"],
        ]

        let ret = [];
        for (let [day, text] of history) {
            ret.push(<History day={day} text={text} />);
        }

        return (
            <div>
                {ret}
            </div>
        );
    }
}

export default HistoryDisplay;