// const skills: string[] = ['Dev', 'DevOps', 'Testing'];
//
// for (const skill of skills) {
//     console.log(skill);
// }
//
// const res = skills
//     .filter((s: string) => s !== 'DevOps')
//     .map((s: string) => s + '!')
//     .reduce((a: string, b: string) => a + b);
//
// console.log(res)

// const skill: [number, string] = [22, 'Dev'];
// const [id, skillName] = skill;
//
// const arr: readonly [number, string, ...boolean[]] = [1, 'sdf', true, true, false];
// const skills: readonly string[] = ['Dev', 'DevOps'];
//
// enum StatusCode {
//     SUCCESS = 1,
//     IN_PROCESS,
//     FAILED
// }
//
// const res = {
//     message: 'Платеж успешен',
//     statusCode: StatusCode.SUCCESS
// }
//
// if (res.statusCode === StatusCode.SUCCESS) {
//     console.log('===');
// }
//
// function action(status: StatusCode) {
//     console.log(status);
// }
//
// action(StatusCode.SUCCESS);
// action(1);

enum QuestionStatus {
    Published = 'published',
    Draft = 'draft',
    Deleted = 'deleted',
}

async function getFaqs(req: {
    topicId: number;
    status: QuestionStatus;
}): Promise<{
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: QuestionStatus;
}[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data = await res.json();
    return data;
}