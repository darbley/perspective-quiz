<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Mbti;

use App\Quiz;

class QuizController extends Controller
{
    //
    public function questions() {
        $questions = Mbti::QUESTIONS;
        $question_name = array_column( $questions, 'text');
        //return response()->json($questions);
        return response()->json($question_name);
        
    }


    public function store()
    {
      

        $testResult = MBTI::calculateMBTI([
            ['question_id' => 1,  'value' => request('question_1')],
            ['question_id' => 2,  'value' => request('question_2')],
            ['question_id' => 3,  'value' => request('question_3')],
            ['question_id' => 4,  'value' => request('question_4')],
            ['question_id' => 5,  'value' => request('question_5')],
            ['question_id' => 6,  'value' => request('question_6')],	
            ['question_id' => 7,  'value' => request('question_7')],	
            ['question_id' => 8,  'value' => request('question_8')],	
            ['question_id' => 9,  'value' => request('question_9')],	
            ['question_id' => 10, 'value' => request('question_10')],	
        ]);

        $quiz = new Quiz();
    
        $quiz->email = request('email');
        $quiz->question_1 = request('question_1');
        $quiz->question_2 = request('question_2');
        $quiz->question_3 = request('question_3');
        $quiz->question_4 = request('question_4');
        $quiz->question_5 = request('question_5');
        $quiz->question_6 = request('question_6');
        $quiz->question_7 = request('question_7');
        $quiz->question_8 = request('question_8');
        $quiz->question_9 = request('question_9');
        $quiz->question_10 = request('question_10');

        $quiz->save();  
        return response()->json($testResult);
    }


}
