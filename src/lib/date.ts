export function formatDate(unixTimestamp: number): string {
  const now = new Date()
  const date = new Date(unixTimestamp * 1000)

  const diffInMs = now.getTime() - date.getTime()
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60))
  const diffInHours = Math.floor(diffInMinutes / 60)
  const diffInDays = Math.floor(diffInHours / 24)

  if (diffInMinutes < 1) {
    return 'только что'
  } else if (diffInMinutes < 60) {
    return `добавлено ${diffInMinutes} минут назад`
  } else if (diffInHours < 24) {
    return `добавлено ${diffInHours} ${pluralizeHours(diffInHours)} назад`
  } else if (diffInDays < 7) {
    return `добавлено ${diffInDays} ${pluralizeDays(diffInDays)} назад`
  } else {
    // Если дата старше недели, показываем стандартный формат
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }
}

function pluralizeHours(hours: number): string {
  if (hours % 10 === 1 && hours % 100 !== 11) {
    return 'час'
  } else if ([2, 3, 4].includes(hours % 10) && ![12, 13, 14].includes(hours % 100)) {
    return 'часа'
  } else {
    return 'часов'
  }
}

function pluralizeDays(days: number): string {
  if (days % 10 === 1 && days % 100 !== 11) {
    return 'день'
  } else if ([2, 3, 4].includes(days % 10) && ![12, 13, 14].includes(days % 100)) {
    return 'дня'
  } else {
    return 'дней'
  }
}
