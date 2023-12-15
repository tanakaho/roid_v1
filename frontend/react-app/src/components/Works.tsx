import {SetStateAction, useState} from "react";

const Works = () => {
		const [lines, setLines] = useState("");
		const validateText = (e: { target: { value: SetStateAction<string>; }; }) => setLines(e.target.value)
		// {
		// 		var validated = '';
		// 		Array.prototype.forEach.call(e.target.value, function (c) {
		// 				if (
		// 						c.match(/[\u30a0-\u30ff\u3040-\u309f]/)
		// 				) {
		// 						validated += c;
		// 				}
		// 		});
		// 		e.target.value = validated;
		// }
		// リセットボタンが押されたとき入力内容をクリア
		const resetLines = () => {
				setLines("");
		}
		
		return (
				<>
						<textarea value={lines} onChange={validateText}/>
						<p>
								{lines}
						</p>
						{/*リセットボタン*/}
						<button onClick={resetLines}>リセット</button>
				</>
		);
};

export default Works