import {differenceInSeconds, format, parseISO} from 'date-fns';

function formatRelative(dateISO: string) {
  const date = parseISO(dateISO);
  const now = Date.now();

  const diffInSeconds = differenceInSeconds(now, date);
  if (diffInSeconds < 0) {
    return format(date, 'dd/MM/yyyy');
  }
  if (diffInSeconds < 60) {
    return `${diffInSeconds} s atrás`;
  }

  const diffInMinutes = Math.round(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} m atrás`;
  }

  const diffInHours = Math.round(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} h atrás`;
  }

  const diffInDays = Math.round(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} d atrás`;
  }

  const diffInWeeks = Math.round(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `${diffInWeeks} sem atrás`;
  }

  const diffInMonths = Math.round(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} ${diffInMonths === 1 ? 'mês' : 'meses'} atrás`;
  }

  const diffInYears = Math.round(diffInMonths / 12);
  return `${diffInYears} ${diffInYears === 1 ? 'ano' : 'anos'} atrás`;

  // return format(date, 'dd/MM/yyyy');
}

export const dateUtils = {formatRelative};
