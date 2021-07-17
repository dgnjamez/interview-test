export function validateEmpty(text: string = '', track: string = 'This field') {
    return {
        status: !text.trim(),
        msg: !text.trim() ? `${track} is required` : ''
    }
}

export function validateMatch(text1: string = '', text2: string = '', track1: string = 'Field 1', track2: string = 'Field 2') {
    return {
        status: !(text1.trim() && text2.trim() && text1.trim() === text2.trim()),
        msg: (!text1.trim() || !text2.trim()) ? `${track1 === 'Field 1' ? 'This field' : track1} is required` : text1.trim() !== text2.trim() ? `${track1} unmatch with ${track2}` : ''
    }
}

export function validateEmail(text: string = '', track: string = 'This field') {
    // eslint-disable-next-line
    const mail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return {
        status: !mail.test(text.trim()),
        msg: !text.trim() ? `${track} is required` : !mail.test(text.trim()) ? `${track} is invalid email address` : ''
    }
}

export function min(text: string = '', range: number = 0, track: string = 'This field') {
    return {
        status: !(text.trim().length < range),
        msg: !text.trim() ? `${track} is required` : text.trim().length < range ? `The shortest digits is ${range}` : ''
    }
}

export function max(text: string = '', range: number = 0, track: string = 'This field') {
    return {
        status: !(text.trim().length > range),
        msg: !text.trim() ? `${track} is required` : text.trim().length > range ? `The longest digits is ${range}` : ''
    }
}

export function minMax(text: string = '', range: Array<number> = [0,0], track: string = 'This field') {
    return {
        status: text.trim().length < range[0] || text.trim().length > range[1],
        msg: !text.trim() ? `${track} is required` : text.trim().length < range[0] || text.trim().length > range[1] ? `${track} should sin range of ${range[0]} to ${range[1]} digits` : ''
    }
}