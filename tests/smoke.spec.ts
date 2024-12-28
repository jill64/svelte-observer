import { expect, test } from '@playwright/test'

test('smoke', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('IDLE')).toBeVisible()

  await page.getByLabel('Success').click()
  await expect(page.getByText('PENDING')).toBeVisible()
  await expect(page.getByText('FULFILLED')).toBeVisible()
  await expect(page.getByText('IDLE')).toBeVisible()

  await page.getByLabel('Error').click()
  await expect(page.getByText('PENDING')).toBeVisible()
  await expect(page.getByText('REJECTED')).toBeVisible()
  await expect(page.getByText('IDLE')).toBeVisible()
})
