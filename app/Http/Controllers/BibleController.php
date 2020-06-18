<?php

namespace App\Http\Controllers;

class BibleController extends Controller
{
    public function download($book_name)
    {
        $bible_path = resource_path('bible');
        $file_prefix = $book_name . '--chapter';
        
        $chapter_file_array = [];

        foreach (glob($bible_path . '/*.txt') as $file_path) {
            $file_name = basename($file_path);
            if (substr($file_name, 0, strlen($file_prefix)) == $file_prefix) {
                array_push($chapter_file_array, $file_path);
            }
        }
        

        if(count($chapter_file_array) > 0) {
            $zip_file = public_path() . '/zip/book.zip';

            $zip = new \ZipArchive();
            $zip->open($zip_file, \ZipArchive::CREATE | \ZipArchive::OVERWRITE);

            foreach($chapter_file_array as $file_path){
                $zip->addFile( $file_path, basename($file_path));
            }

            $zip->close();
            
            return response()->download($zip_file)->deleteFileAfterSend(true);
        } else {
            abort(404);
        }
    }
}
