export function validateProductForm(name: string, categoryId: string): string | null {
  const trimmedName = name.trim();
  const containsNumber = /\d/.test(trimmedName);

  if (!trimmedName && !categoryId) {
    return "יש להזין שם מוצר ולבחור קטגוריה.";
  }

  if (!trimmedName) {
    return "יש להזין שם מוצר.";
  }

  if (trimmedName.length < 2) {
    return "שם המוצר חייב להכיל לפחות 2 תווים.";
  }

  if (containsNumber) {
    return "שם המוצר לא יכול להכיל מספרים.";
  }

  if (!categoryId) {
    return "יש לבחור קטגוריה.";
  }

  return null;
}
