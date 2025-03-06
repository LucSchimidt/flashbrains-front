import React from 'react';
import Link from 'next/link';

interface Subject {
    nome: string;
    slug: string;
  }

const SubjectBox: React.FC<Subject> = ({ nome, slug }) => {

    let href = `subjects/${slug}`

    return(
        <Link className="bg-gray-100 cursor-pointer hover:bg-gray-200 rounded-sm p-10 w-full" href={href}>
            {nome}
        </Link>
    )
}

export default SubjectBox