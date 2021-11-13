FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "user#{n}@example.com" }
    sequence(:name) { |n| "user#{n}" }
    password              { 'password' }
    password_confirmation { 'password' }
  end
end
